import React, { Component } from "react";

const token = localStorage.getItem('Token');

export default class AdminPanel extends Component {
  render() {
    return (
      <div>
        <h2>Admin Panel</h2>
        <div className="cA">
          <button
            type="submit"
            onClick={(event) =>
              (window.location.href = `/myProducts/Upload/${this.props.id}`)
            }
          >
            Upload a photo
          </button>
          <button
            type="submit"
            onClick={(event) =>
             fetch(`http://localhost:8000/services/${this.props.id}/`,{
               method: "DELETE",
               headers:{
                'Authorization': `Token ${token}`,
               }
              
             }).then(res => window.location.reload(false))
            }
          >
            Delete this product
          </button>
          <button
            type="submit"
            onClick={(event) =>
              (window.location.href = `/sellerspage/${this.props.id}`)
            }
          >
            Go to my product
          </button>
        </div>
      </div>
    );
  }
}
