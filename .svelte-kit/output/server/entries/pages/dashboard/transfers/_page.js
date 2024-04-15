import { b as fetchAssetsWithHomeDomains } from "../../../../chunks/horizonQueries.js";
async function load({ parent }) {
  const { balances } = await parent();
  return {
    /** @type {import('$lib/stellar/horizonQueries').HomeDomainBalanceLine[]} */
    homeDomainBalances: await fetchAssetsWithHomeDomains(balances)
  };
}
export {
  load
};
