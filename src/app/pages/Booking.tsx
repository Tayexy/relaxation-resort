import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Booking.css';

const Booking: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standard',
    specialRequests: ''
  });
  const [bookingComplete, setBookingComplete] = useState(false);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    setBookingComplete(true);
    setTimeout(() => {
      setBookingComplete(false);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: 'standard',
        specialRequests: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isAuthenticated) {
    return null;
  }

  if (bookingComplete) {
    return (
      <div className="booking-page">
        <div className="booking-success">
          <div className="success-icon">✓</div>
          <h2>Booking Confirmed!</h2>
          <p>Thank you for your reservation. A confirmation email has been sent to your address.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="page-header">
        <h1>Book Your Stay</h1>
        <p>Reserve your perfect getaway</p>
      </div>

      <div className="container">
        <div className="booking-container">
          <div className="booking-form-section">
            <h2>Reservation Details</h2>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Check-in Date</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Check-out Date</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Number of Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange}>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Room Type</label>
                  <select name="roomType" value={formData.roomType} onChange={handleChange}>
                    <option value="standard">Standard Room - $150/night</option>
                    <option value="deluxe">Deluxe Room - $250/night</option>
                    <option value="suite">Suite - $400/night</option>
                    <option value="villa">Private Villa - $800/night</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special requests or requirements..."
                />
              </div>

              <button type="submit" className="btn-book">
                Complete Booking
              </button>
            </form>
          </div>

          <div className="booking-info-section">
            <h3>What's Included</h3>
            <ul className="included-list">
              <li>Daily breakfast buffet</li>
              <li>Free Wi-Fi</li>
              <li>Access to pool and beach</li>
              <li>Fitness center access</li>
              <li>24/7 concierge service</li>
              <li>Welcome drink on arrival</li>
            </ul>

            <div className="cancellation-policy">
              <h3>Cancellation Policy</h3>
              <p>Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable.</p>
            </div>

            <div className="need-help">
              <h3>Need Help?</h3>
              <p>Contact our booking team at:</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> bookings@paradiseresort.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
