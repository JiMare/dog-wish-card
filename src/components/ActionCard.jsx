import React from 'react'
import { Link } from "react-router-dom";

export const ActionCard = ({actionPath, actionName, actionText }) => {
    return (
      <Link className="action shadow" to={actionPath}>
        <div className="action__inside">
          <div className="action__decoration"></div>
          <div className="action__content">
            <h2 className="action__title">
              <span className="laurels">{actionName}</span>
              vánoční přáníčko
            </h2>
            <p className="action__description">{actionText}</p>
          </div>
        </div>
      </Link>
    );
}
