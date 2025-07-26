function MaterialsPage() {
    return (
      <main className="materials">
        <h1>Study Materials</h1>
        <div className="materials-grid">
          <div className="material-card">
            <h3>IGCSE ICT - Syllabus</h3>
            <a href="/697139-2026-2028-syllabus.pdf" target="_blank">View PDF</a>
          </div>
          <div className="material-card">
            <h3>AS Level CS Worksheets</h3>
            <a href="/materials/as_cs_worksheets.pdf" target="_blank">View PDF</a>
          </div>
          <div className="material-card">
            <h3>Python Assignments</h3>
            <a href="/materials/python_assignments.pdf" target="_blank">View PDF</a>
          </div>
        </div>
      </main>
    );
  }
  
  export default MaterialsPage;
  