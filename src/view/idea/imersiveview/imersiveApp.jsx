import react from "react";
import styledComponents from "styled-components";
import "../../css/global/imersive.css"
import "./mouseinteract.js"
export var rotate = 0
function ImersiveScreen (){
    rotate= 1;
    var imgurl ="https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373_960_720.jpg"
    const Window = styledComponents.section `
    width:100%;height:60vh`
    const Screen = styledComponents.div `
    
    .data{
    background: url("${imgurl}");background-size: cover;
      }
    `
    return(
        <div className="fullspace">
            <Window>
                <div className="masterimersivescreen">
                    <div className={"masterimersive"}>
                        <Screen className={'scroll'} id="euhuofuwfuwofguwguwe">
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                            <div className={'cutfts data'}></div>
                        </Screen>
                    </div>
                </div>
            </Window>
        </div>
    )
}
export {
    ImersiveScreen
}