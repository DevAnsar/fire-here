import React  from "react";
class FireHere extends React.Component{
    constructor(){
        super();
            this.state={
                usedFire : false 
            }
            this.eleRef = React.createRef();
    }
    componentDidMount(){
        document.addEventListener('scroll',()=>{
            if(this.getScrollY() + this.getClientHeight() >= this.getOffsetTop()){
                if(! this.state.usedFire){
                    this.setState({usedFire:true});
                    this.props.onHereFn()
                }
                
            }
        })
    }
        getClientHeight =()=>document.documentElement.clientHeight;
        getScrollY =()=>window.scrollY;
        getOffsetTop =()=>this.eleRef.current.offsetTop;

        render(){
            return(
                <div id={this.props.id} ref={this.eleRef}>
                    {this.props.childer}
                </div>
            )
        }
}
export default FireHere;