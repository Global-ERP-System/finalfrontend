import React, { Component } from 'react'
import './Community.css'
//import "@reach/menu-button/styles.css";
import {Container} from 'reactstrap';


class Community extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Comment: '',
            Visibility: ''
        }
    }
    handlePostChange = (event) => {
        this.setState({
            Comment: event.target.value
        })
    }
    handleVisibilityChange = (event) => {
        this.setState({
            Visibility: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.Comment} ${this.state.Visibility}`)
    }

    render() {
        return (
            <div id="main">
                <div id="SideNavBar">
                        <div className='container notif' style={{marginTop:'0px'}}>
                            <h5>Notifications</h5>
                        </div>
                        <div className='conatiner ads'>
                            <h5>ADs</h5>
                        </div>
                </div>
                <div id="Contentbox">
                    <h1 className="Community">Community</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label className="commentheading">Write a Post</label>
                            <textarea value={this.state.Comment}
                                onChange={this.handlePostChange} cols="80" rows="5" placeholder="Write Something..."
                                className="something"></textarea></div>
                        <div>
                            <button id="Tags">Tag</button>
                        </div>
                        <br></br>
                        <div>
                            <label id="Visibility1">Visibility:</label>
                            <select value={this.state.visibility} onChange={this.handleVisibilityChange} id="Visibility2">
                                <option value="Public">Public </option>
                                <option value="ClassMate">Classmates</option>
                                <option value="SubOrdinates">Subordinates</option>
                            </select>
                        </div>
                        <div>
                            <button id="Post">Post</button>
                        </div>
                    </form>
                    <div id="Recent">
                        <label className="recentheading">Recent posts</label>

                    </div>
                </div>
                <div id="SideNavBar">
                        <div className='container profile' style={{marginTop:'0px'}}>
                         <h5>Profile</h5>
                             {/*  <h6>&lt;NAME&gt;</h6><br/>
                            
                        <a href="/profile" >Edit profile</a><br></br><br></br>
                        <label className="profilecontent">School/College : </label><br></br><br></br>
                        <label className="profilecontent">Year/Standard : </label><br></br><br></br>
                        <label className="profilecontent">Attendance : </label><br></br><br></br> */}
                        </div>
                        <div className='conatiner schedule'>
                            <h5>My Schedule</h5>
                        </div>
                </div>

             {  /* <Container id="RightSidebox">
                <div >
                
                    <div id="Notificationbox">
                        <h3 style={{marginLeft:'10%'}}>My Schedule</h3>
                        <h6 style={{marginLeft:'10%'}}>&lt;Current Day's Schedule&gt;</h6><br/>
                        <a style={{marginLeft:'10%'}} href="/timetable" >View More</a><br/><br/><br/>
                    </div>
                
                    <div id="Profilebox">
                        <h3 style={{marginLeft:'10%'}}> PROFILE<br/></h3>
                        <h4 style={{marginLeft:'10%'}}>&lt;NAME&gt;</h4>
                        <a style={{marginLeft:'10%'}} href="/profile" >Edit profile</a><br></br><br></br>
                        <label className="profilecontent">School/College : </label><br></br><br></br>
                        <label className="profilecontent">Year/Standard : </label><br></br><br></br>
                        <label className="profilecontent">Attendance : </label><br></br><br></br>
                    </div>
                </div>
                </Container>  */ }
            </div>

        )
    }
}
export default Community;