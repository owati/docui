
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import logo from '../assets/logo.png';
import profile from '../assets/profile.png'

function LoadPage() {
    return (
        <div className="load-page">
            <div style={{
                width: '100%',
                height: 'calc(100vh - 50px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <img src={logo} height="100" width="120"></img>
                <h3>Doc Express</h3>

            </div>
            <div style={{
                width: '100%',
                height: 'calc(100vh - 50px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
            }}>
                <h5>powered by itweak.</h5>

            </div>

        </div>
    )
}

function Mode(props) {
    return (
        <div style={{
            position: 'fixed',
            top: '0px',
            display: 'none',
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(114,114,114,0.9)',
            zIndex: '4',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} id='mode'>
            {props.children}

        </div>
    )
}

function OrderForm() {
    const history = useHistory()
    let [which, setWhich] = useState('broiler')
    let [first, setFirst] = useState(false)

    function selectWhich(what) {
        setWhich(what);
        for (let i of document.getElementsByClassName('order-top')) {
            if (i.innerHTML === what) {
                i.style.backgroundColor = 'cornsilk';
                i.style.color = 'black';
            } else {
                i.style.backgroundColor = 'transparent';
                i.style.color = 'cornsilk';
            }
        }
    }

    useEffect(() => {
        if (!first) selectWhich('Broiler'); setFirst(true);
    })
    return (
        <Mode>
            <div>
                <ul style={{ margin: '0px', padding: '0px' }}>
                    <li className="order-top" onClick={() => selectWhich('Broiler')}>Broiler</li>
                    <li className="order-top" onClick={() => selectWhich('Noiler')}>Noiler</li>
                    <li className="order-top" onClick={() => selectWhich('Poulet')}>Poulet</li>
                    <li className="order-top" onClick={() => selectWhich('Cockerel')}>Cockerel</li>
                </ul>
            </div>
            <div className="order-form">
                <h4 style={{ margin: '0px' }}>{which} pick-up date.</h4>
                <input type="date" defaultValue={new Date().toLocaleDateString()}></input>
                <h4 style={{ margin: '0px' }}>Quantity.</h4>
                <input type='number' placeholder="Quantity needed?" ></input>
                <h4 style={{ margin: '0px' }}>Location</h4>
                <select>
                    <option value="lagos"> Lagos</option>
                    <option value="lagos"> Lagos</option>
                    <option value="lagos"> Lagos</option>
                    <option value="lagos"> Lagos</option>
                    <option value="lagos"> Lagos</option>
                </select>

                <h4 style={{ margin: '0px', display: 'none' }} id="hatch-tit">Found the following hatcheries</h4>
                <select style={{ display: 'none' }} id="hatch">
                    <option value="lagos"> Amo hatchery</option>
                    <option value="lagos"> Lab hatchery</option>
                    <option value="lagos"> ops hatchery</option>

                </select>

                <button className="order-but grow" onClick={e => {
                    if (e.target.innerHTML !== 'order now') {
                        let hatch = document.getElementById('hatch')
                        let tit = document.getElementById('hatch-tit')
                        hatch.style.display = 'none';
                        tit.style.display = 'block';
                        tit.innerHTML = "searching for hatchery";

                        setTimeout(() => {
                            hatch.style.display = 'block';
                            tit.innerHTML = 'found these hatcheries';
                            e.target.innerHTML = 'order now'

                        }, 2000)
                    } else {
                        history.push('/orders')
                    }
                }}>
                    Inquire Now
                </button>


            </div>
        </Mode>
    )
}

function Navbar() {

    return (
        <div className="nav">
            <h1>Hi Fiyin.</h1>
            <h1 style={{ cursor: 'pointer' }}
                className="grow"
                onClick={() => {
                    let mode = document.getElementsByClassName('modal')[0]
                    let side_bar = document.getElementsByClassName('side-bar')[0]
                    if (mode.style.display = 'none') {
                        mode.style.display = 'flex';
                        side_bar.style.width = '250px';
                    } else {

                    }
                }}>&#9776;</h1>
        </div>
    )
}

function PriceCard(props) {
    return (
        <div className="card shadow-5 grow">
            <h4 style={{ margin: '0px' }}>{props.name}</h4>
            <h5 style={{ margin: '0px' }}>#{props.price}</h5>
        </div>
    )
}

function Buttondiv(props) {
    return (
        <div className="button-div">
            {props.children}
        </div>
    )
}

function Price() {
    return (
        <div className="price-show">
            <h3>Check todays average prices</h3>
            <div style={{
                display: 'flex'
            }}>
                <PriceCard name={'noiler'} price={'233'} />
                <PriceCard name={'noiler'} price={'233'} />
                <PriceCard name={'noiler'} price={'233'} />

            </div>
        </div>
    )
}

function Button(props) {
    return (
        <button style={{
            width: '120px',
            height: '120px',
            borderRadius: '30px',
            margin: '0px 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'

        }} className="grow shadow-5"
            onClick={props.func}>
            <img src={profile} height='50' width='50'></img>
            <h4 style={{ margin: '4px ' }}>create order</h4>

        </button>

    )
}

function Sidemodal() {
    return (
        <div className="modal">
            <div className="side-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} height="40" width='43'></img>
                    <h2 style={{ marginLeft: '10px' }}>DocExpress</h2>
                </div>

                <ul style={{ padding: '0px' }}>
                    <li className="side-list grow"> my account</li>
                    <li className="side-list grow"> my account</li>
                    <li className="side-list grow"> my account</li>
                    <li className="side-list grow"> my account</li>
                    <li className="side-list grow"> my account</li>
                    <li className="side-list grow"> my account</li>
                </ul>

            </div>

        </div>
    )

}

function Home() {
    let handleWindowClick = e => {
        if (e.target === document.getElementsByClassName('modal')[0]) {
            document.getElementsByClassName('side-bar')[0].style.width = '0px'
            document.getElementsByClassName('modal')[0].style.display = 'none';
        } else if (e.target === document.getElementById('mode')) {
            orderCreate()
        }
    }

    function orderCreate() {
        if (document.getElementById('mode').style.display === 'none') {
            document.getElementById('mode').style.display = 'flex';
        } else {
            document.getElementById('mode').style.display = 'none';
        }
    }

    useEffect(() => {
        window.addEventListener('click', handleWindowClick)

        return function cleanup() {
            window.removeEventListener('click', handleWindowClick)
        }
    })


    useEffect(() => {
        setTimeout(() => {
            document.getElementsByClassName('load-page')[0].style.display = 'none';
        }, 2000)
    })
    return (

        <div style={{ backgroundColor: 'rgb(82 74 74)', color: 'cornsilk' }}>
            <LoadPage />
            <Navbar />
            <Price />
            <Buttondiv >
                <div className="button-arrange">
                    <Button func={orderCreate} />
                    <Button />
                </div>
                <div className="button-arrange">
                    <Button />
                    <Button />
                </div>

            </Buttondiv>
            <Sidemodal />
            <OrderForm />
        </div>
    )

}

export default Home;