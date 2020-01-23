import React from "react"
import "./Locations.css"

export default ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <address className="location__address">{location.address}</address>
    </section>
)