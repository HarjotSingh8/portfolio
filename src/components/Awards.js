import React from 'react';

const Awards = ({ awards }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Academic':
        return 'fas fa-graduation-cap';
      case 'Competition':
        return 'fas fa-trophy';
      case 'Certification':
        return 'fas fa-certificate';
      default:
        return 'fas fa-award';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic':
        return 'text-primary';
      case 'Competition':
        return 'text-warning';
      case 'Certification':
        return 'text-success';
      default:
        return 'text-info';
    }
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 font-weight-bold">Awards & Achievements</h2>
        <div className="row">
          {awards.map((award, index) => (
            <div key={award.id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <div className={`mr-3 ${getCategoryColor(award.category)}`}>
                      <i className={`${getCategoryIcon(award.category)} fa-2x`}></i>
                    </div>
                    <div>
                      <h5 className="card-title mb-1 font-weight-bold">{award.title}</h5>
                      <h6 className="text-muted mb-0">{award.organization}</h6>
                    </div>
                  </div>
                  
                  <p className="text-muted mb-2">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    {award.date}
                  </p>
                  
                  <p className="card-text flex-grow-1">{award.description}</p>
                  
                  <div className="mt-auto">
                    <span className={`badge badge-outline-secondary ${getCategoryColor(award.category)}`}>
                      {award.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;