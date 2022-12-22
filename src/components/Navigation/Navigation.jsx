import { A, List, ListItem, Nav } from "./Navigation.styled";
import movieIcon from '../../images/movie-camera.png';

export const Navigation = () => {
    return (
        <Nav>
            <List>
                <ListItem><img src={movieIcon} alt="" width="40" height="40"/></ListItem>
                <ListItem><A to='/' end>Home</A></ListItem>
                <ListItem><A to='/movies'>Movies</A></ListItem>
            </List>
        </Nav>
    )
}