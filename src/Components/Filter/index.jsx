export function Filter(event, filter, setFilter) {
    const text = event.target.innerText;
    setFilter(text);
}
