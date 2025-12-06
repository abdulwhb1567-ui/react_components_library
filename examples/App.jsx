import React, { useState } from 'react';
import { Button, Card, Modal } from '../src';
import '../src/styles/index.css';
import './index.css';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1>React Components Library</h1>
        <p>Explore Button, Card, and Modal Components</p>
      </header>

      <main className="main-content">
        {/* Button Section */}
        <section className="section">
          <h2>Button Component</h2>
          <p className="section-description">
            Versatile buttons with multiple variants and sizes
          </p>

          <div className="component-section">
            <div className="subsection">
              <h3>Variants</h3>
              <div className="button-grid">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
                <Button variant="outline">Outline</Button>
              </div>
            </div>

            <div className="subsection">
              <h3>Sizes</h3>
              <div className="button-grid">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div className="subsection">
              <h3>States</h3>
              <div className="button-grid">
                <Button disabled>Disabled</Button>
                <Button isLoading>Loading...</Button>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>

            <div className="subsection">
              <h3>Combinations</h3>
              <div className="button-grid">
                <Button variant="danger" size="lg">
                  Large Danger Button
                </Button>
                <Button variant="success" size="sm">
                  Small Success
                </Button>
                <Button variant="outline" size="lg" fullWidth>
                  Large Outline Full Width
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Card Section */}
        <section className="section">
          <h2>Card Component</h2>
          <p className="section-description">
            Flexible container for displaying content
          </p>

          <div className="component-section">
            <div className="cards-grid">
              {/* Simple Card */}
              <Card title="Simple Card" subtitle="With title only">
                This is a basic card component with a title and content.
              </Card>

              {/* Card with Image */}
              <Card
                title="Card with Image"
                subtitle="Premium Quality"
                image="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=250&fit=crop"
                imageAlt="Product"
              >
                Beautiful card with an image at the top
              </Card>

              {/* Elevated Card */}
              <Card
                elevated
                title="Elevated Card"
                subtitle="More prominent"
              >
                This card has a stronger shadow effect for emphasis.
              </Card>

              {/* Card with Footer */}
              <Card
                title="Card with Action"
                footer={
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button size="sm" variant="secondary">
                      Cancel
                    </Button>
                    <Button size="sm" variant="primary">
                      Save
                    </Button>
                  </div>
                }
              >
                This card has action buttons in the footer
              </Card>

              {/* Feature Card */}
              <Card
                title="Feature Card"
                subtitle="With rich content"
              >
                <div className="card-content">
                  <h4>Key Features</h4>
                  <ul>
                    <li>Accessible components</li>
                    <li>Simple JavaScript (no TS)</li>
                    <li>Responsive design</li>
                    <li>Easy to customize</li>
                  </ul>
                </div>
              </Card>

              {/* Empty State Card */}
              <Card
                title="Empty State"
                body={
                  <div className="empty-state">
                    <p>No items to display</p>
                    <Button size="sm" variant="primary">
                      Create New
                    </Button>
                  </div>
                }
              />
            </div>
          </div>
        </section>

        {/* Modal Section */}
        <section className="section">
          <h2>Modal Component</h2>
          <p className="section-description">
            Dialog boxes with smooth animations
          </p>

          <div className="component-section">
            <div className="button-grid">
              <Button
                variant="primary"
                onClick={() => setIsModalOpen(true)}
              >
                Simple Modal
              </Button>
              <Button
                variant="success"
                onClick={() => setIsConfirmOpen(true)}
              >
                Confirmation Modal
              </Button>
              <Button
                variant="danger"
                onClick={() => setIsDeleteOpen(true)}
              >
                Delete Modal
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Modals */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Simple Modal"
      >
        <p>This is a simple modal dialog.</p>
        <p>It demonstrates the basic modal functionality with smooth animations.</p>
        <p>You can close it by clicking the X button, pressing Escape, or clicking outside.</p>
      </Modal>

      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Confirm Action"
        footer={
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsConfirmOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => {
                alert('Action confirmed!');
                setIsConfirmOpen(false);
              }}
            >
              Confirm
            </Button>
          </div>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
        <p>This action can be undone.</p>
      </Modal>

      <Modal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        title="Delete Item"
        footer={
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsDeleteOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                alert('Item deleted!');
                setIsDeleteOpen(false);
              }}
            >
              Delete
            </Button>
          </div>
        }
      >
        <p>
          <strong>Warning:</strong> This action cannot be undone.
        </p>
        <p>Are you sure you want to delete this item permanently?</p>
      </Modal>

      <footer className="footer">
        <p>React Components Library © 2025 | Built with ❤️</p>
      </footer>
    </div>
  );
}
