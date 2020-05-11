import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { connect } from 'react-redux';
import { $CombinedState } from 'redux';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }


    ChangeHeart = () => {
        if (this.props.stt_heart === 0) {
            this.props.upHeart()
        } else {
            this.props.downHeart()
        }
    }

    fetchData = async () => {
        this.props.loading()

        const result = await axios(
            `http://jsonplaceholder.typicode.com/posts?_limit=${this.props.limit}`,
        ).catch(err => {
            console.log(err)
        });

        let parseNewData = result.this.state.data.map((data) => {
            data.like = Math.floor(Math.random() * Math.floor(50)) + 1;
            data.isLiked = !Math.round(Math.random());
            data.views = Math.floor(Math.random() * Math.floor(150)) + 12
            return data;
        })
        this.setState({ data: parseNewData });
        console.log(result);

    }

    loadMore = () => {
        return this.props.limit
    }

    render() {
        return (
            <>
                {this.props.Loading && <pre>LOADING...</pre>}
                <section className="section">
                    <div className="container width-1140">
                        <div className="columns is-mobile is-multiline ">{this.state.data.map(val => (
                            <div className="column is-4 has-text-centered" key={val.id}>
                                <div className="single-post">
                                    <Link to={{ pathname: `/post/${val.id}` }}>
                                        <figure className="image">
                                            <img src="https://colorlib.com/etc/bona/images/marion-michele-330691.jpg" />
                                        </figure>
                                    </Link>
                                    <div className="blog-info is-primary ">
                                        <h4 className="title">{val.title}</h4>
                                        <div className="columns post-card--footer">
                                            <div className="column flex-center   is-4 post-footer">
                                                <span className="flex-center" >
                                                    <li><a onClick={this.ChangeHeart}><i className="ion-heart" />{this.props.ion_heart}</a></li>
                                                    {val.like}
                                                </span>
                                            </div>
                                            <div className="column flex-center   is-4 post-footer">
                                                <li><a href="#"><i className="ion-chatbubble" />{this.props.ion_chatbubble}</a></li>
                                            </div>
                                            <div className="column flex-center   is-4 post-footer">
                                                <li><a onClick={this.props.upView}><i className="ion-eye" />{this.props.ion_view}</a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <button className={"is-primary button " + (this.props.Loading ? 'is-loading' : '')} onClick={this.loadMore}>Load more</button>
                    </div>
                </section>

            </>
        )
    }
}

const MapStateToProps = (state) => ({
    ion_heart: state.ion_heart,
    ion_chatbubble: state.ion_chatbubble,
    ion_view: state.ion_view,
    stt_heart: state.stt_heart,
    data: state.data,
    loading: state.loading,
    _limit: state._limit
})

function mapDispatchToProps(dispatch) {
    return {
        upHeart: () =>
            dispatch({
                type: "UP_HEART"
            }),
        downHeart: () =>
            dispatch({
                type: "DOWN_HEART"
            }),
        upView: () =>
            dispatch({
                type: "UP_VIEW"
            }),
        loading: () =>
            dispatch({
                type: "LODADING"
            }),
        limit: () => {
            dispatch({
                type: "LIMIT"
            })
        }
    }
}

export default connect(MapStateToProps, mapDispatchToProps)(Home)