import "./counter.css";
import { useEffect, useState, useRef } from "react";

export default function Counter() {

  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  const [counts, setCounts] = useState({
    saving: 0,
    photos: 0,
    rockets: 0,
    globes: 0,
  });

  const target = {
    saving: 1287,
    photos: 5786,
    rockets: 1440,
    globes: 7110,
  };

  // detect scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // start counting
  useEffect(() => {
    if (!start) return;

    const interval = setInterval(() => {
      setCounts((prev) => ({
        saving: prev.saving < target.saving ? prev.saving + 20 : target.saving,
        photos: prev.photos < target.photos ? prev.photos + 50 : target.photos,
        rockets: prev.rockets < target.rockets ? prev.rockets + 15 : target.rockets,
        globes: prev.globes < target.globes ? prev.globes + 60 : target.globes,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div className="counter" ref={sectionRef}>
      <div className="container">
        <div className="row pt-5 text-center pb-5">

          <div className="col-md-3">
            <h4>{counts.saving}+</h4>
            <span>Savings</span>
          </div>

          <div className="col-md-3">
            <h4>{counts.photos}+</h4>
            <span>Photos</span>
          </div>

          <div className="col-md-3">
            <h4>{counts.rockets}+</h4>
            <span>Rockets</span>
          </div>

          <div className="col-md-3">
            <h4>{counts.globes}+</h4>
            <span>Globes</span>
          </div>

        </div>
      </div>
    </div>
  );
}