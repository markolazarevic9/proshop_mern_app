import Header from "./Header"
import Footer from "./Footer"
import { Container } from 'react-bootstrap'

export default function Layout(props) {
    return (
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}