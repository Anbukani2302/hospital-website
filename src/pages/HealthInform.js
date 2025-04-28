import React from 'react';
import '../CSS/HealthInform.css';

function HealthInform() {
  return (
    <div className="health-info-container">
      <h1 className="fade-in">Health Information</h1>
      <p className="fade-in">
        Welcome to the Health Information page. Here, you can find resources, articles, and tips to improve your health.
      </p>

      <section className="health-topics">
        <h2 className="slide-up">HEALTH TOPICS</h2>
        <div className="card-container">
          <div className="card fade-in">
            <h3>Healthy Eating</h3>
            <p>
              Healthy eating is essential for maintaining a balanced diet and supporting your body's needs. A balanced diet includes a variety of nutrient-rich foods such as fruits, vegetables, whole grains, lean proteins, and healthy fats.
            </p>
            <p><strong>Key tips for healthy eating:</strong></p>
            <ul>
              <li>Focus on portion control – Eating the right portions can help you manage weight and maintain overall health.</li>
              <li>Stay hydrated – Water is crucial for digestion, nutrient absorption, and maintaining healthy skin.</li>
              <li>Include fiber-rich foods – Whole grains, legumes, and vegetables provide essential fiber for digestive health.</li>
              <li>Limit processed foods – Reduce the intake of sugar, salt, and unhealthy fats commonly found in processed and fast foods.</li>
            </ul>
          </div>

          <div className="card fade-in">
            <h3>Fitness Goals</h3>
            <p>
              Setting fitness goals is essential to maintain motivation and track progress. Whether you're aiming to improve your strength, endurance, flexibility, or overall fitness, having clear goals will help you stay on track.
            </p>
            <p><strong>Steps to set achievable fitness goals:</strong></p>
            <ul>
              <li>Set SMART goals – Specific, Measurable, Achievable, Relevant, and Time-bound goals will keep you focused.</li>
              <li>Start small – Begin with manageable goals to avoid burnout and gradually increase intensity.</li>
              <li>Track your progress – Use apps, journals, or fitness trackers to monitor improvements over time.</li>
              <li>Make it enjoyable – Choose activities you love so that fitness feels less like a chore and more like fun.</li>
            </ul>
          </div>

          <div className="card fade-in">
            <h3>Managing Stress</h3>
            <p>
              Stress is a natural part of life, but chronic stress can affect your physical and mental health. Learning how to manage stress effectively can improve your overall well-being.
            </p>
            <p><strong>Effective stress management techniques:</strong></p>
            <ul>
              <li>Mindfulness meditation – Practicing mindfulness helps you stay present and reduces the impact of stress.</li>
              <li>Physical activity – Exercise is one of the best ways to release stress and boost endorphins.</li>
              <li>Deep breathing – Controlled breathing exercises can help calm your mind and reduce tension.</li>
              <li>Time management – Prioritize tasks and set realistic deadlines to reduce feelings of being overwhelmed.</li>
              <li>Social connections – Spend time with loved ones, as social support can help you manage stress.</li>
            </ul>
          </div>

          <div className="card fade-in">
            <h3>Wellness Check-ups</h3>
            <p>
              Regular wellness check-ups are essential for preventing health problems and detecting issues early. These check-ups can include a variety of screenings based on your age, gender, and risk factors.
            </p>
            <p><strong>Important check-ups to consider:</strong></p>
            <ul>
              <li>Annual physical exams – Regular doctor visits ensure you're staying on top of your health and can address any concerns.</li>
              <li>Blood pressure screening – High blood pressure is a silent condition that can lead to serious health problems.</li>
              <li>Cholesterol and glucose tests – These help in detecting early signs of heart disease and diabetes.</li>
              <li>Cancer screenings – Depending on your age and risk factors, screenings like mammograms, colonoscopies, or skin exams are important.</li>
              <li>Vaccinations – Stay up-to-date with immunizations to prevent illnesses.</li>
            </ul>
          </div>

          <div className="card fade-in">
            <h3>Hydration and Health</h3>
            <p>
              Staying hydrated is critical for your body's functions, including digestion, circulation, and temperature regulation. Water makes up a significant portion of your body and is vital for overall health.
            </p>
            <p><strong>Benefits of staying hydrated:</strong></p>
            <ul>
              <li>Supports digestion – Proper hydration aids in digestion and nutrient absorption.</li>
              <li>Improves skin health – Water helps maintain skin elasticity and combats dryness.</li>
              <li>Regulates body temperature – Staying hydrated helps your body maintain a stable temperature.</li>
              <li>Boosts energy levels – Dehydration can lead to fatigue and decreased mental clarity.</li>
              <li>Helps detoxify – Water helps flush toxins from the body and supports kidney function.</li>
            </ul>
          </div>

          <div className="card fade-in">
            <h3>Healthy Aging</h3>
            <p>As you age, it's important to maintain physical, mental, and emotional well-being to live a full and healthy life. Healthy aging focuses on making lifestyle choices that improve your overall quality of life as you get older.</p>
            <p><strong>Key tips for healthy aging:</strong></p>
            <ul>
              <li><strong>Stay physically active:</strong> Regular exercise, such as walking, swimming, or strength training, helps improve mobility, balance, and reduces the risk of chronic diseases.</li>
              <li><strong>Eat a nutrient-rich diet:</strong> Focus on consuming whole foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats. Proper nutrition helps with energy, immune function, and bone health.</li>
              <li><strong>Prioritize mental health:</strong> Engage in activities that promote brain health, such as reading, puzzles, or socializing. Managing stress, staying connected with loved ones, and practicing mindfulness can support emotional well-being.</li>
              <li><strong>Get regular health screenings:</strong> Regular check-ups and screenings, such as blood pressure, cholesterol, and cancer screenings, help identify potential health issues early and ensure you stay on top of your health.</li>
              <li><strong>Stay hydrated:</strong> Proper hydration is crucial as we age because the body's ability to sense thirst decreases with age. Drinking enough water supports digestion, skin health, and energy levels.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="health-articles">
        <br />
        <br />

        <h2 className="slide-up">LATEST ARTICLE</h2>
        <ul className="article-list">
          <li className="fade-in">
            <div className="card">
              <h3><a href="/article/1">Top 5 Foods to Boost Your Immunity</a></h3>
              <p>Learn about the best foods to support a strong immune system and improve overall health.</p>
            </div>
          </li>
          <li className="fade-in">
            <div className="card">
              <h3><a href="/article/2">The Importance of Sleep for Mental Clarity</a></h3>
              <p>Find out how quality sleep helps your brain function and enhances productivity.</p>
            </div>
          </li>
          <li className="fade-in">
            <div className="card">
              <h3><a href="/article/3">How to Create a Balanced Exercise Routine</a></h3>
              <p>Step-by-step guide to incorporating cardio, strength, and flexibility exercises into your weekly schedule.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="health-testimonials">
        <h2 className="slide-up">What People Are Saying</h2>
        <div className="testimonial-container">
          <div className="testimonial-card fade-in">
            <p>"I followed the tips on managing stress and it changed my life. Highly recommend this site!"</p>
            <h4>- Sarah W.</h4>
          </div>
          <div className="testimonial-card fade-in">
            <p>"The wellness check-up section helped me understand how important it is to stay on top of my health."</p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card fade-in">
            <p>"I’ve learned so much about hydration. I feel much better since I started drinking more water!"</p>
            <h4>- Emily R.</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthInform;
