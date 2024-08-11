// eslint-disable-next-line import/no-anonymous-default-export
export default {
  importAlias: /^[^*"]+\/\*\s*$/,
  name: /^(?:(?:@(?:[a-z0-9-*~][a-z0-9-*._~]*)?\/[a-z0-9-._~])|[a-z0-9-~])[a-z0-9-._~]*$/,
} satisfies Record<string, RegExp>;
