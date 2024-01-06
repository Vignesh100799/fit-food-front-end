import { faCheck, faTimes, faXmark } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'


const Card = ({details}) => {
  return (
    <div className="col-lg-4 col-md-8">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
          <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            {Object.entries(details.features).map(([feature, included]) => (
              <li key={feature} className={included ? '' : 'text-muted'}>
                <span className="fa-li">
                  {included ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} />
                  )}
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
