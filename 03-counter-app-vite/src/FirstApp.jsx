import PropTypes from 'prop-types';



export const FirstApp = ({title, subTitle, name}) => {
    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    name: 'No hay nombre',
    subTitle: 'No hay subtítulo',
    title: 'No hay título'
}