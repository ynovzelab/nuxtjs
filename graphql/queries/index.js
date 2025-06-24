export const GET_PAGE_BY_SLUG = `
query Pages($filters: PageFiltersInput) {
    pages(filters: $filters) {
        createdAt
        name
        metadata {
            metatitle
            metadescription
        }
        pageBuilder {
        ... on ComponentUiTextAlignedWithImage {
                __typename
                id
                reverse
                image {
                    url
                }
                description
            }
                ... on ComponentUiHero {
                __typename
                id
                title
                image {
                    url
                }
            }
        }
    }
}
`