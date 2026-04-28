FROM oven/bun:1.3.9 AS pruner
WORKDIR /repo

COPY package.json bun.lock turbo.json ./
COPY apps/client/package.json apps/client/package.json
COPY apps/server/package.json apps/server/package.json
COPY packages ./packages

RUN bun install --frozen-lockfile

COPY . .
ARG TURBO_SCOPE="@internal-business-os/client"
RUN bun run turbo prune --scope="$TURBO_SCOPE" --docker

FROM oven/bun:1.3.9 AS deps
WORKDIR /repo

COPY --from=pruner /repo/out/full/ ./
COPY --from=pruner /repo/out/bun.lock ./bun.lock

RUN bun install --frozen-lockfile

FROM oven/bun:1.3.9 AS build
WORKDIR /repo
ARG TURBO_SCOPE="@internal-business-os/client"

COPY --from=deps /repo/ ./
RUN bun run turbo run build --filter="$TURBO_SCOPE"...

FROM oven/bun:1.3.9 AS run
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY --from=build /repo/apps/client/.next/standalone ./
COPY --from=build /repo/apps/client/.next/static ./apps/client/.next/static
COPY --from=build /repo/apps/client/public ./apps/client/public

RUN apt-get update \
  && apt-get install -y --no-install-recommends curl \
  && rm -rf /var/lib/apt/lists/*

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=5 \
  CMD curl -fsS http://127.0.0.1:3000/ >/dev/null || exit 1

EXPOSE 3000

CMD ["bun", "apps/client/server.js"]