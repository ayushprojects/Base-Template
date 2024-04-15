import React from 'react'


function Services({ data }) {
  return (
      <>
          <div>Services</div>
          {data.map((service) => (
              <div key={service.id}>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
              </div>
          ))}
      </>
  );
}

export default Services;