

const House = ({appertment}) => {

    const {img} = appertment;

    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default House;