import { A, List, ListItem, Nav } from "./Navigation.styled";
import movieIcon from '../../images/movie-camera.png';
import { Img } from "./Navigation.styled";
import { NavLink } from 'react-router-dom';


export const Navigation = () => {
    return (
        <Nav>
            <List>
                <ListItem><NavLink to='/' end><Img src={movieIcon} alt="" width="40" height="40"/></NavLink></ListItem>
                <ListItem><A to='/' end>Home</A></ListItem>
                <ListItem><A to='/movies'>Movies</A></ListItem>
            </List>
        </Nav>
    )
}