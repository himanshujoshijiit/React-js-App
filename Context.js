import React,{Component} from 'react'
 

export const DataContext = React.createContext();

export class DataProvider extends Component{



    state ={
        products:[
            {
                "_id":"1",
                "title": "Nike shoes 01",
                "src":"https://th.bing.com/th/id/OPA.Ll2l9j83J2MUwQ474C474?w=200&h=220&rs=1&o=5&dpr=1.25&pid=21.1",
                "Description":"UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://th.bing.com/th/id/OPA.U6NDj3GFuzEnSw474C474?w=161&h=220&rs=1&o=5&dpr=1.25&pid=21.1",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 19,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://th.bing.com/th/id/OPA.cznSQPHMUUFriw474C474?w=200&h=220&rs=1&o=5&dpr=1.25&pid=21.1",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 50,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://th.bing.com/th/id/OPA.cznSQPHMUUFriw474C474?w=200&h=220&rs=1&o=5&dpr=1.25&pid=21.1",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 15,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://th.bing.com/th/id/OPA.iWKRCqfcp0FuUg474C474?w=174&h=220&rs=1&o=5&dpr=1.25&pid=21.1",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 10,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": " data:image/jpeg;base64,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",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 17,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            }
        ],
        cart: []
    };

    addCart =(id)=>{
        const {products,cart} = this.state;
        const check = cart.every(item=>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
            return product._id === id
        })

        this.setState({cart: [...cart,...data]})
        }else{
            alert("this product has been addedd to cart.")
        }
        
        
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product")){
             const {cart} = this.state;
        cart.forEach((item,index)=>{
            if(item._id === id)
            {
                cart.splice(index,1);
            }
        })

        this.setState({cart: cart})
        this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev,item)=>{
             return prev +(item.price* item.count);
        },0)
        this.setState({total:res})
    };

    reduction = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id)
            {
                item.count === 1? item.count= 1: item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
            
    };
    increase = id=>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id)
            {
                 item.count +=1;
            }
        })

        this.setState({cart: cart});
        this.getTotal();
       
    };

  

    render(){

        const {products,cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <div>
           <DataContext.Provider value={{products,addCart,cart,reduction,increase,removeProduct,total,getTotal}}>
               {this.props.children}
           </DataContext.Provider>
            </div>
        )
    }
}