import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import author1 from "../assets/images/author-1.jpg";
import author2 from "../assets/images/author-2.jpg";
import author3 from "../assets/images/author-3.jpg";
import author4 from "../assets/images/author-4.jpg";

const testimonials = [
  {
    img: author1,
    name: "Maria Smantha",
    role: "Web Developer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 4.5,
  },
  {
    img: author2,
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
    rating: 5,
  },
  {
    img: author3,
    name: "John Smith",
    role: "Marketing Specialist",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    rating: 4,
  },
  {
    img: author4,
    name: "Sarah Taylor",
    role: "SEO Specialist",
    text: "Dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            Hear what our customers have to say about our services.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        {testimonials.map((testimonial, index) => (
          <MDBCol md="4" className="mb-5" key={index}>
            <div className="d-flex justify-content-center mb-4">
              <img
                src={testimonial.img}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
                alt={testimonial.name}
              />
            </div>
            <h5 className="mb-3">{testimonial.name}</h5>
            <h6 className="text-primary mb-3">{testimonial.role}</h6>
            <p className="px-xl-3">
              <MDBIcon fas icon="quote-left" className="pe-2" />
              {testimonial.text}
            </p>
            <MDBTypography
              listUnStyled
              className="d-flex justify-content-center mb-0"
            >
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <MDBIcon
                    fas
                    icon={i + 1 <= Math.floor(testimonial.rating) ? "star" : i < testimonial.rating ? "star-half-alt" : "star"}
                    size="sm"
                    className="text-warning"
                  />
                </li>
              ))}
            </MDBTypography>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
