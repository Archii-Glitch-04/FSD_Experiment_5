import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Multi-Step Form</h2>
      <ProgressBar now={(step / 3) * 100} className="mb-4" />

      {step === 1 && (
        <Form>
          <h4>Step 1: Personal Information</h4>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>
          <Button onClick={nextStep}>Next</Button>
        </Form>
      )}

      {step === 2 && (
        <Form>
          <h4>Step 2: Address Details</h4>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
          </Form.Group>
          <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
          <Button onClick={nextStep}>Next</Button>
        </Form>
      )}

      {step === 3 && (
        <div>
          <h4>Step 3: Review & Submit</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
          <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
          <Button variant="success">Submit</Button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
