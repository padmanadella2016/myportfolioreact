import React, { Component } from 'react'
import { Layout,CardText,CardActions,CardMenu,Grid,Cell ,Card,IconButton,CardTitle,Button, Header,Content } from 'react-mdl';

export default class landingpage extends Component {
    render() {
        return (
            <Layout>
            <Content>          
               <h1 style={{textAlign: "center"}}>Hello Beautiful !!!</h1>
                <Grid className="demo-grid-1">
                <Cell col={4}>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>About</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Read More</Button>
                    </CardActions>
                </Card>
                </Cell>
                <Cell col={4}>
                <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>About</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Read More</Button>
                    </CardActions>
                </Card>
                </Cell>
                <Cell col={4}>   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Contact Me</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                        <Button colored>Read More</Button>
                    </CardActions>
                </Card>
                </Cell>
                </Grid>             
                <div style={{width: '80%', margin: 'auto',textAlign: "center",paddingTop: '50px'}}>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                   industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book. It has survived
                     not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>          
                </div>
            </Content>
            </Layout>
        )
    }
}
