import React, { Fragment, useState } from 'react'
import styles from '../CSS_modules/home.module.css'
import { Container } from 'react-bootstrap';

function Who() {
    let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    let [info, setInfo] = useState(text.slice(0, 60))
    return (
        <Fragment>
            <Container>
                <h1 className={`${styles.whoTitle}`}>Who We Are</h1>
                <p className={`${styles.whoInfo}`}>{info}</p>
                <button onClick={() => {
                    info.length < 61 ? setInfo(text.slice(0, -1)) : setInfo(text.slice(0, 50))
                }}>
                    {info.length < 61 ? "Learn more" : "Show less"}</button>
            </Container>
        </Fragment>
    )
}

export default Who
