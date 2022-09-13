import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "./card.scss"
const Card = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" d-flex col-lg-12 col-md-4 col-12">
          <div className="card w-100 m-2 ">
            <div className="card-body">
              <h5 className="card-title">USERS</h5>
              <p className="card-text">
               720
              </p>
              <a href="/" className="">
                See all users
              </a>
              <PersonIcon className="cardIcons users"/>
            </div>
          </div>

          <div className="card w-100 m-2 ">
            <div className="card-body">
              <h5 className="card-title">ORDERS</h5>
              <p className="card-text">
              260
              </p>
              <a href="/" className="">
                View all orders
              </a>
              <AddShoppingCartIcon className="cardIcons orders"/>
            </div>
          </div>
          <div className=" card w-100 m-2 ">
            <div className="card-body">
              <h5 className="card-title">EARNINGS</h5>
              <p className="card-text">
                $ 4.7k
              </p>
              <a href="/" className="">
                View all earnings
              </a>
              <AttachMoneyIcon className="cardIcons earnings"/>
            </div>
          </div>
          <div className="card w-100 m-2 ">
            <div className="card-body">
              <h5 className="card-title">MY BALANCE</h5>
              <p className="card-text">
               $ 7.9k
              </p>
              <a href="/" className="">
                See details
              </a>
              <AccountBalanceWalletIcon className="cardIcons myBalance"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
