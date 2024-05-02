import PropTypes from 'prop-types';


export default function Info({id, goodsName, goodsPrice, goodsDescription, isInStock }) {
    const handle = () => {
        console.log(goodsName)
        console.log(goodsPrice)
        console.log(goodsDescription)
        console.log(isInStock)
        console.log(id)
    }
    return (
        <>  <h1>{id}</h1>
            <ul>
                <li>Name {goodsName}</li>
                <li>Price {goodsPrice}</li>
                <li>Description {goodsDescription}</li>
                <li>Anbarda var:{isInStock ? 'BELI' : 'YOX'}</li>
                <button onClick={handle}>ALERT</button>
            </ul>
        </>
    )
}

Info.propTypes = {
    id: PropTypes.number, 
    goodsName: PropTypes.string, 
    goodsPrice:PropTypes.number, 
    goodsDescription: PropTypes.string, 
    isInStock:PropTypes.bool
}

