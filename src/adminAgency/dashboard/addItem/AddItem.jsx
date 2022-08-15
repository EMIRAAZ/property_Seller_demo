import React from 'react';
import './addItem.scss';
import { useNavigate } from 'react-router-dom';

function AddItem() {
  let navigate = useNavigate();

  return (
    <div className="add-item-main">
      <div className="text-div">
        <div className="inside-icon-div">
          <div className="icon">
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7595 10.6092H17.3162V11.0741H18.7595V10.6092Z"
                fill="#FFB849"
              />
              <path
                d="M18.7595 5.12231H17.3162V5.5873H18.7595V5.12231Z"
                fill="#FFB849"
              />
              <path
                d="M13.0755 8.37723H12.1753V9.3072H13.0755V8.37723Z"
                fill="#FFB849"
              />
              <path
                d="M18.7595 6.14529H17.3162V6.70328H18.7595V6.14529Z"
                fill="#FFB849"
              />
              <path
                d="M18.7595 9.49319H17.3162V10.0512H18.7595V9.49319Z"
                fill="#FFB849"
              />
              <path
                d="M10.5497 5.0293H8.56695V7.07525H10.5497V5.0293Z"
                fill="#FFB849"
              />
              <path
                d="M18.7595 7.26126H17.3162V7.81925H18.7595V7.26126Z"
                fill="#FFB849"
              />
              <path
                d="M18.7595 8.37723H17.3162V8.93521H18.7595V8.37723Z"
                fill="#FFB849"
              />
              <path
                d="M6.49496 8.37723H5.05164V8.93521H6.49496V8.37723Z"
                fill="#FFB849"
              />
              <path
                d="M6.49496 9.49319H5.05164V10.0512H6.49496V9.49319Z"
                fill="#FFB849"
              />
              <path
                d="M6.49496 5.12231H5.05164V5.5873H6.49496V5.12231Z"
                fill="#FFB849"
              />
              <path
                d="M6.49496 10.6092H5.05164V11.0741H6.49496V10.6092Z"
                fill="#FFB849"
              />
              <path
                d="M6.49496 6.14529H5.05164V6.70328H6.49496V6.14529Z"
                fill="#FFB849"
              />
              <path
                d="M16.5945 4.75032V4.19978L10.8249 0L7.2129 2.70809V11.0742H16.5945V4.75032ZM11.0928 7.35426C11.0933 7.39041 11.0866 7.4263 11.0732 7.45989C11.0599 7.49347 11.04 7.5241 11.0148 7.55C10.9896 7.57591 10.9595 7.5966 10.9263 7.61088C10.8931 7.62516 10.8574 7.63277 10.8212 7.63325H8.2954C8.25924 7.63277 8.22354 7.62516 8.19033 7.61088C8.15712 7.5966 8.12705 7.57591 8.10183 7.55C8.07661 7.5241 8.05675 7.49347 8.04337 7.45989C8.02998 7.4263 8.02335 7.39041 8.02384 7.35426V4.75032C8.02335 4.71417 8.02998 4.67828 8.04337 4.64469C8.05675 4.61111 8.07661 4.58049 8.10183 4.55458C8.12705 4.52867 8.15712 4.50798 8.19033 4.4937C8.22354 4.47942 8.25924 4.47181 8.2954 4.47133H10.8212C10.8574 4.47181 10.8931 4.47942 10.9263 4.4937C10.9595 4.50798 10.9896 4.52867 11.0148 4.55458C11.04 4.58049 11.0599 4.61111 11.0732 4.64469C11.0866 4.67828 11.0933 4.71417 11.0928 4.75032V7.35426ZM13.6186 9.5862C13.6191 9.62235 13.6124 9.65825 13.5991 9.69183C13.5857 9.72542 13.5658 9.75604 13.5406 9.78195C13.5154 9.80785 13.4853 9.82854 13.4521 9.84282C13.4189 9.85711 13.3832 9.86471 13.347 9.8652H11.9037C11.8676 9.86471 11.8319 9.85711 11.7986 9.84282C11.7654 9.82854 11.7354 9.80785 11.7101 9.78195C11.6849 9.75604 11.6651 9.72542 11.6517 9.69183C11.6383 9.65825 11.6317 9.62235 11.6322 9.5862V8.09824C11.6317 8.06209 11.6383 8.0262 11.6517 7.99261C11.6651 7.95902 11.6849 7.9284 11.7101 7.9025C11.7354 7.87659 11.7654 7.8559 11.7986 7.84162C11.8319 7.82733 11.8676 7.81973 11.9037 7.81925H13.347C13.3832 7.81973 13.4189 7.82733 13.4521 7.84162C13.4853 7.8559 13.5154 7.87659 13.5406 7.9025C13.5658 7.9284 13.5857 7.95902 13.5991 7.99261C13.6124 8.0262 13.6191 8.06209 13.6186 8.09824V9.5862Z"
                fill="#FFB849"
              />
              <path
                d="M6.49496 7.26126H5.05164V7.81925H6.49496V7.26126Z"
                fill="#FFB849"
              />
              <path
                d="M21.6424 17.026V14.7941H14.0687C13.97 14.7941 13.8754 14.7549 13.8057 14.6851C13.7359 14.6154 13.6967 14.5207 13.6967 14.4221C13.6967 14.3234 13.7359 14.2288 13.8057 14.159C13.8754 14.0893 13.97 14.0501 14.0687 14.0501H21.6424V11.8181H10.8212V17.026H10.0996V11.8181H6.13041V17.026H5.41247V11.8181H2.16499V17.026H0V17.77H23.8074V17.026H21.6424Z"
                fill="#FFB849"
              />
            </svg>
          </div>
          <h1>Add a new property</h1>
        </div>
        <h1>Add Property</h1>
        <h2>Click the plus icon to add</h2>
      </div>
      <div
        className="add-icon-div"
        onClick={() => navigate('/agency/add-property')}
      >
        <div className="icon">
          <svg
            width="23"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.02 0H9.98C8.88648 0 8 0.886476 8 1.98V18.02C8 19.1135 8.88648 20 9.98 20H10.02C11.1135 20 12 19.1135 12 18.02V1.98C12 0.886476 11.1135 0 10.02 0Z"
              fill="#FFB849"
            />
            <path
              d="M18.02 8H1.98C0.886476 8 0 8.88648 0 9.98V10.02C0 11.1135 0.886476 12 1.98 12H18.02C19.1135 12 20 11.1135 20 10.02V9.98C20 8.88648 19.1135 8 18.02 8Z"
              fill="#FFB849"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
