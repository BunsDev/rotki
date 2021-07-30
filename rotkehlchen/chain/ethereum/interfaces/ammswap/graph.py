MINTS_QUERY = (
    """
    mints
    (
        first: $limit,
        skip: $offset,
        where: {{
            to: $address,
            timestamp_gte: $start_ts,
            timestamp_lte: $end_ts,
        }}
    ) {{
        transaction {{
            id
        }}
        logIndex
        timestamp
        to
        pair {{
            id
            token0 {{
                id
                decimals
                name
                symbol
            }}
            token1 {{
                id
                decimals
                name
                symbol
            }}
        }}
        amount0
        amount1
        amountUSD
        liquidity
    }}}}
    """
)

BURNS_QUERY = (
    """
    burns
    (
        first: $limit,
        skip: $offset,
        where: {{
            sender: $address,
            timestamp_gte: $start_ts,
            timestamp_lte: $end_ts,
        }}
    ) {{
        transaction {{
            id
        }}
        logIndex
        timestamp
        sender
        pair {{
            id
            token0 {{
                id
                decimals
                name
                symbol
            }}
            token1 {{
                id
                decimals
                name
                symbol
            }}
        }}
        amount0
        amount1
        amountUSD
        liquidity
    }}}}
    """
)

SWAPS_QUERY = (
    """
    swaps
    (
        first: $limit,
        skip: $offset,
        where: {{
            from: $address,
            timestamp_gte: $start_ts,
            timestamp_lte: $end_ts,
        }}
    ) {{
        transaction {{
            swaps {{
                id
                logIndex
                sender
                to
                timestamp
                pair {{
                    token0 {{
                        id
                        decimals
                        name
                        symbol
                    }}
                    token1 {{
                        id
                        decimals
                        name
                        symbol
                    }}
                }}
                amount0In
                amount0Out
                amount1In
                amount1Out
            }}
        }}
    }}}}
    """
)

SUSHISWAP_SWAPS_QUERY = (
    """
    swaps
    (
        first: $limit,
        skip: $offset,
        where: {{
            to: $address,
            timestamp_gte: $start_ts,
            timestamp_lte: $end_ts,
        }}
    ) {{
        transaction {{
            swaps {{
                id
                logIndex
                sender
                to
                timestamp
                pair {{
                    token0 {{
                        id
                        decimals
                        name
                        symbol
                    }}
                    token1 {{
                        id
                        decimals
                        name
                        symbol
                    }}
                }}
                amount0In
                amount0Out
                amount1In
                amount1Out
            }}
        }}
    }}}}
    """
)

TOKEN_DAY_DATAS_QUERY = (
    """
    tokenDayDatas
    (
        first: $limit,
        skip: $offset,
        where: {{
            token_in: $token_ids,
            date: $datetime,
        }}
    ) {{
        date
        token {{
            id
        }}
        priceUSD
    }}}}
    """
)
