import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height;
    const nodes = [];
    const connections = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      nodes.length = 0;
      const nodeCount = Math.min(80, Math.floor((width * height) / 12000));
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.4,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const updateConnections = () => {
      connections.length = 0;
      const maxDistance = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            connections.push({
              node1: nodes[i],
              node2: nodes[j],
              opacity: (maxDistance - distance) / maxDistance,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(10,10,10,0.4)";
      ctx.fillRect(0, 0, width, height);

      connections.forEach((connection) => {
        const gradient = ctx.createLinearGradient(
          connection.node1.x,
          connection.node1.y,
          connection.node2.x,
          connection.node2.y
        );
        gradient.addColorStop(0, `rgba(255,215,0,${connection.opacity * 0.4})`);
        gradient.addColorStop(0.5, `rgba(255,223,0,${connection.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(255,215,0,${connection.opacity * 0.4})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = connection.opacity * 1.5;
        ctx.beginPath();
        ctx.moveTo(connection.node1.x, connection.node1.y);
        ctx.lineTo(connection.node2.x, connection.node2.y);
        ctx.stroke();
      });

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
        node.pulsePhase += 0.02;
        const pulseScale = 1 + Math.sin(node.pulsePhase) * 0.3;

        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * pulseScale * 4
        );
        gradient.addColorStop(0, `rgba(255,215,0,${node.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255,215,0,${node.opacity * 0.4})`);
        gradient.addColorStop(1, "rgba(255,215,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255,215,0,${node.opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2);
        ctx.fill();
      });

      updateConnections();
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background: "transparent",
        filter: "brightness(1) contrast(1.1)",
      }}
    />
  );
}