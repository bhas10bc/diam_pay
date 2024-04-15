// @ts-nocheck
import { fetchAssetsWithHomeDomains } from '$lib/stellar/horizonQueries'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ parent }) {
    const { balances } = await parent()
    return {
        /** @type {import('$lib/stellar/horizonQueries').HomeDomainBalanceLine[]} */
        homeDomainBalances: await fetchAssetsWithHomeDomains(balances),
    }
}
