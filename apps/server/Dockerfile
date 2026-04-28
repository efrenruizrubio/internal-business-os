FROM oven/bun:1.3.9 AS pruner
WORKDIR /repo

COPY package.json bun.lock turbo.json ./
COPY apps/client/package.json apps/client/package.json
COPY apps/server/package.json apps/server/package.json
COPY packages ./packages
RUN bun install --frozen-lockfile

COPY . .
ARG TURBO_SCOPE="@internal-business-os/server"
RUN bun run turbo prune --scope="$TURBO_SCOPE" --docker

FROM oven/bun:1.3.9 AS deps
WORKDIR /repo

COPY --from=pruner /repo/out/full/ ./
COPY --from=pruner /repo/out/bun.lock ./bun.lock

RUN bun install --frozen-lockfile

FROM oven/bun:1.3.9 AS build
WORKDIR /repo
ARG TURBO_SCOPE="@internal-business-os/server"

COPY --from=deps /repo/ ./
RUN bun run turbo run build --filter="$TURBO_SCOPE"...

FROM oven/bun:1.3.9 AS run
WORKDIR /app
ENV NODE_ENV=production

COPY --from=deps /repo/ ./
COPY --from=build /repo/apps/server/dist ./apps/server/dist

RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD curl -f http://127.0.0.1:4000/health >/dev/null || exit 1

EXPOSE 4000
CMD ["bun", "apps/server/dist/main.js"]