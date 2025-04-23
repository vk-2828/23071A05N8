import React from 'react'

function AboutPage() {
  return (
    <div className=' align-items-center text-center mt-5'  style={{width:"600px",margin:"auto"}}>
      <h4 className='text-primary'>About This page</h4>
      <div className='card p-3' style={{width:"800px",margin:"auto"}}>
        <p>
        A random number generator is a simple yet powerful tool used to produce a sequence of numbers that have no discernible pattern. In applications like the one above, users input a number n, and the tool generates n random values, typically within a specified range. Such generators are widely used in simulations, gaming, cryptography, testing, and statistical sampling. They provide unpredictability, making them essential for fair selections, randomized testing scenarios, and secure data processes.
        </p>
      </div>
    </div>
  )
}

export default AboutPage;
