import axios from 'axios'
import React, { Component } from 'react'
import UserAvatar from '../Components/Shared/Avatar'
import NavBar from '../Components/Profile/NavBar'
import ImageCard from '../Components/Shared/Cards'
import { Container } from '@material-ui/core'
import { Buds } from '../Components/Profile/Buds'
import '../styles/profile.css'
class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            album: []
        }
    }

    componentDidMount() {
        this.getUserAlbum()
    }

    // Retrieves all the pictures that a user uploaded
    getUserAlbum = async () => {
        let username = sessionStorage.getItem('user')
        try {
            const { data } = await axios.get(`http://localhost:8080/posts/profile/${username}`, {
                params: {
                    username: username
                }
            })
            console.log(data.payload);

            this.setState({
                album: data.payload
            })
        } catch (error) {
            console.log(error);

        }
    }

    renderNavBar() {
        return <Buds />
    }

    render() {
        const { album } = this.state
        const username = sessionStorage.getItem('user')
        const profile_pic = sessionStorage.getItem('profile_pic')
        console.log(this.state);


        return (
            <div className='profile'>
                <div className='header'>
                    <div className='top'>
                        <UserAvatar pic={profile_pic} class_name={'classes.large'} userName={username} />
                    </div>
                    <NavBar renderNavBar={this.renderNavBar} />
                </div>
                <Container maxWidth='lg' className='imgContainer'>
                    {
                        album.map(el => {
                            let time_post = el.time_post.replace('T05:00:00.000Z', '')
                            return <div className='profileCard'>
                                <ImageCard
                                    postPic={el.img}
                                    username={username}
                                    pic={profile_pic}
                                    caption={el.caption}
                                    hashtag={el.hashtag}
                                    time_post={time_post}
                                />
                            </div>
                        })

                    }
                </Container>
            </div>
        )
    }
}

export default Profile
