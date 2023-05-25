export function filterData(searchText,data) {
    const filterData = data.filter((x) => x?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

export function filterPosts(searchText,data) {
    const filterData = data.filter((x) => x?.userId?.toString().includes(searchText));
    return filterData;
}

export function filterComments(searchText,data) {
    const filterData = data.filter((x) => x?.postId?.toString().includes(searchText));
    return filterData;
}