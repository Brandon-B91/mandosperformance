import React from 'react'
import Layout from "../components/Layout"
import Instagram from "../components/Instagram"

const ourWork = () => {
    return (
        <Layout>
        <div>
            <h2 className="text-light text-center mt-3 mb-3">Check out our latest work!</h2>
            <Instagram></Instagram>
        </div>
        </Layout>
    )
}

ourWork.propTypes = {

}

export default ourWork
