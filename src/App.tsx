import React, {useEffect, useState} from 'react';
import './App.css';
import {deleteRequest, getRequest, IApiResponse, postRequest} from "./service/Basevices";

function App() {
    const [list, setList] = useState<{ id: number, name: string } []>([])
    const [userSelected, setUserSelected] = useState<{ id: number, name: string }>({id: 0, name: ""})

    const resetUserSelected = () => setUserSelected({id: 0, name: ""})

    const getData = async () => {
        const getList = (): Promise<IApiResponse<{ id: number, name: string } []>> => getRequest("https://60964612116f3f00174b2db6.mockapi.io/user", false)
        let resList = await getList()

        if (resList) {
            setList(resList.body)
        }
    }

    const deleteUser = async () => {
        const deleteUser = (): Promise<IApiResponse<any>> => deleteRequest("https://60964612116f3f00174b2db6.mockapi.io/user/" + userSelected.id.toString(), false)
        const resDelete = await deleteUser()

        if (resDelete && resDelete.status === 200) {
            alert("delete success !!!")
            getData()
        } else {
            alert("delete failed")
        }
    }

    const postUser = async (data: {name: string}) => {
        const postUser = (): Promise<IApiResponse<any>> => postRequest("https://60964612116f3f00174b2db6.mockapi.io/user/", false, data)
        const resPost = await postUser()

        if (resPost && resPost.status === 201) {
            alert("post user successful !!!")
            getData()
            resetUserSelected()
        } else {
            alert("post user failed !!!")
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h1>Test base service (call api)</h1>
            <div>
                <b>id: {userSelected!.id}</b>
                <div><b>Name: </b><input type="text" onChange={event => setUserSelected({id: 0, name: event.target.value})} defaultValue={userSelected!.name}/></div>
            </div>
            <div style={{display: "flex"}}>
                <div style={{width: 300}}>
                    <h3>Test get list</h3>
                    <ul>
                        {list.map(value => <li key={value.id} onClick={() => setUserSelected(value)}>{value.name}</li>)}
                    </ul>
                </div>

                <div>
                    <h3>Test delete list</h3>
                    <p>choose an user to delete</p>
                    <button type="submit" onClick={() => deleteUser()}>Delete user</button>
                </div>

                <div style={{marginLeft: 50}}>
                    <h3>Test post list</h3>
                    <p>fill input</p>
                    <button type="submit" onClick={() => {postUser({name: userSelected.name})}}>Post user</button>
                </div>
            </div>
        </div>
    );
}

export default App;
