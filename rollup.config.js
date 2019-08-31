export default [{
    input: 'node_modules/@rhd/components/dp-category-list/init.js',
    output: {
      file: 'dist/components/dp-category-list/dp-category-list.js',
      format: 'umd',
      name: 'DPCategoryList',
      globals: {
        DPCategoryList: 'DPCategoryList',
        DPCategoryItemList: 'DPCategoryItemList',
        DPCategoryItem: 'DPCategoryItem',
        DPCategory: 'DPCategory',
        DPProductShortTeaser: 'DPProductShortTeaser',
        '@patternfly/pfelement/pfelement': 'PFElement'
      }
    },
    external: [
      '@patternfly/pfelement/pfelement',
      '@fortawesome/fontawesome-svg-core/index',
      '@fortawesome/pro-solid-svg-icons/index'
    ]
  },{
    input: 'node_modules/@rhd/components/dp-search/init.js',
    output: {
      file: 'dist/components/dp-search/dp-search.js',
      format: 'umd',
      name: 'DPSearch',
      globals: {
        DPSearchActiveFilters: 'DPSearchActiveFilters',
        DPSearchApp: 'DPSearchApp',
        DPSearchBox: 'DPSearchBox',
        DPSearchFilterActiveItem: 'DPSearchFilterActiveItem',
        DPSearchFilterGroup: 'DPSearchFilterGroup',
        DPSearchFilterItem: 'DPSearchFilterItem',
        DPSearchFilters: 'DPSearchFilters',
        DPSearchModalFilters: 'DPSearchModalFilters',
        DPSearchOneBox: 'DPSearchOneBox',
        DPSearchQuery: 'DPSearchQuery',
        DPSearchResultCount: 'DPSearchResultCount',
        DPSearchResult: 'DPSearchResult',
        DPSearchResults: 'DPSearchResults',
        DPSearchSortPage: 'DPSearchSortPage',
        DPSearchURL: 'DPSearchURL',
        '@patternfly/pfelement/pfelement': 'PFElement'
      }
    },
    external: [
      '@patternfly/pfelement/pfelement',
      '@fortawesome/fontawesome-svg-core/index',
      '@fortawesome/pro-solid-svg-icons/index'
    ]
  }];