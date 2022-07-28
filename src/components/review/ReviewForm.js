import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import "./review.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const ReviewForm = ({ getPosts }) => {
    const { establishmentId } = useParams()
    const [accessibilities, setAccessibilities] = useState([])
    const [establishment, updateEstablishment] = useState([])
    const [accessibilityPosts, setAccessibilityPosts] = useState([])

    const localPottyUser = localStorage.getItem("potty_user")
    const pottyUserObject = JSON.parse(localPottyUser)

    useEffect(
        () => {
            fetch(`http://localhost:8088/accessibilities`)
                .then(response => response.json())
                .then((accessibilitiesArray) => {
                    setAccessibilities(accessibilitiesArray)
                })
        },

        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/establishments?id=${establishmentId}`)
                .then(response => response.json())
                .then((data) => {
                    const singleEst = data[0]
                    updateEstablishment(singleEst)
                })
        },
        [establishmentId]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/accessibilityPosts`)
                .then(response => response.json())
                .then((accessibilityPostsArray) => {
                    setAccessibilityPosts(accessibilityPostsArray)
                })
        },

        []
    )

    const [post, update] = useState({
        review: "",
        userId: "",
        establishmentId: "",
        accessibilityId: ""
    })

    const [accessibilityPost, updateAccessibilityPosts] = useState({

        postId: "",
    })

    const Example = (args) => {
        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);

        return (
            <div>
                <Button color="danger" onClick={toggle}>Read Our Review Guidelines</Button>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>Guidlines</ModalHeader>
                    <ModalBody>
                        No Potty Mouths will be tolerated, Please keep your reviews squeaky clean.
                        No name calling, bullying or harassment of any kind.
                        Do not use this site for anything other than what it's intended for.
                        Breaking these rules will result in a swift banishment from our site.

                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const ticketToSendToAPI = {
            review: post.review,
            userId: pottyUserObject.id,
            establishmentId: parseInt(establishmentId),
            timeStamp: Date.now()
        }

        const accessToSendToAPI = {
            accessibilityId: post.accessibilityId,
            postId: 0,
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSendToAPI)
        })
            .then(response => response.json())
            .then((newPost) => {
                accessToSendToAPI.postId = newPost.id
                return fetch(`http://localhost:8088/accessibilityPosts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(accessToSendToAPI)
                })
            })
            .then(getPosts)
    }

    return (<form className="pottyForm">
        <h2>{establishment?.name}</h2>

        <div className="form-group ">
            <label htmlFor="review">Write a Review</label>
            <textarea
                required autoFocus
                type="textarea" row={20} cols={100}
                className="formgroup-textarea"
                placeholder="Write a Review"
                value={post.review}
                onChange={
                    (evt) => {
                        const copy = { ...post }
                        copy.review = evt.target.value
                        update(copy)
                    }
                } />
        </div>

        <fieldset>
            <div className="drop__location">
                <label htmlFor="accessability"></label>
                <Dropdown
                    label="Select an Accessability this bathroom offers: "
                    accessibilities={accessibilities}
                    onChange={
                        (evt) => {
                            const copy = { ...post }
                            copy.accessibilityId = parseInt(evt.target.value)
                            update(copy)
                        }
                    }
                />
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}

            className="btn btn-primary">
            Post Review
        </button>
        {
            Example()
        }
    </form>

    )

}

const Dropdown = ({ label, accessibilities, onChange }) => {

    return (
        <label className="the__drop">
            {label}
            <select onChange={(event) => { onChange(event) }}>
                <option value={0}>select an accessibility</option>
                {accessibilities.map((accessibilitie) => (
                    <option key={accessibilitie.id} value={accessibilitie.id}>{accessibilitie.name}</option>
                ))}
            </select>
        </label>
    );
};