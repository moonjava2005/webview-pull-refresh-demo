export default class TestSet {
    map: { [key: string]: string } = {}

    public add(item: string) {
        if (item) {
            this.map[item] = item
        }
    }

    public remove(item: string) {
        delete this.map[item]
    }

    public has(item: string) {
        return !!this.map[item]
    }
}
