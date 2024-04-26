export function ListFirst() {
    let listItemsObj = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
    }

    return (
        <>
            <ul>
                <li className="list">{listItemsObj.one}</li>
                <li className="list">{listItemsObj.two}</li>
                <li className="list">{listItemsObj.three}</li>
                <li className="list">{listItemsObj.four}</li>
            </ul>
        </>
    )
}


export default function ListSecond() {
    let listItems = [1, 2, 3, 4]

    return (
        <>
            <ul>
                <li style={{
                    backgroundColor: 'red',
                    color: 'green',
                    fontSize: '30px'
                }}>{listItems[0]}</li>
                <li>{listItems[1]}</li>
                <li>{listItems[2]}</li>
                <li>{listItems[3]}</li>
            </ul>
        </>
    )
}
