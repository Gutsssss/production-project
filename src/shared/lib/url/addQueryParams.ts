export const getQueryParams = (params:OptionalRectord<string, string>) => {
    const searchParam = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParam.set(name, value);
        }
    });
    return `?${searchParam.toString()}`;
};

export const addQueryParams = (params:OptionalRectord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params));
};
