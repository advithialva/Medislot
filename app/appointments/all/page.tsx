'use client';

import { useState } from 'react';
import appointmentsData from '../../data/mockAppointments';

// Table column options
const columnOptions = [
  { key: 'id', label: 'ID' },
  { key: 'service', label: 'Service' },
  { key: 'date', label: 'Date' },
  { key: 'timeslot', label: 'Time Slot' },
  { key: 'department', label: 'Department' },
  { key: 'doctor', label: 'Doctor' },
  { key: 'patient', label: 'Patient' },
  { key: 'status', label: 'Status' },
  { key: 'createdOn', label: 'Created On' },
];

export default function AllAppointments() {
  // State management
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Approved'>('All');
  const [page, setPage] = useState(1);
  const [visibleCols, setVisibleCols] = useState<string[]>(columnOptions.map((col) => col.key));
  const [showModal, setShowModal] = useState(false);
  const [tempCols, setTempCols] = useState<string[]>(visibleCols);
  const perPage = 7;

  // Filtering based on search and status
  const filtered = appointmentsData.filter((apt) => {
    const matchText = `${apt.department} ${apt.doctor} ${apt.patient}`
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchStatus =
      statusFilter === 'All' || apt.status.toLowerCase() === statusFilter.toLowerCase();
    return matchText && matchStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  // Toggle a column in the temp customization list
  const toggleTempColumn = (key: string) => {
    setTempCols((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  // Open customization modal
  const handleCustomizeClick = () => {
    setTempCols(visibleCols);
    setShowModal(true);
  };

  // Apply selected columns
  const applyCustomization = () => {
    setVisibleCols(tempCols);
    setShowModal(false);
  };

  return (
    <div className="p-4 md:p-8 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">All Appointments</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Customize Table Button */}
          <button
            onClick={handleCustomizeClick}
            className="bg-gray-700 text-white px-4 py-2 rounded-md shadow hover:bg-gray-800 transition text-sm"
          >
            Customize Table
          </button>

          {/* CSV Download Button */}
          <button
            onClick={() => {
              const rows = [visibleCols.map((key) => key.toUpperCase())];
              filtered.forEach((apt) => {
                const row = visibleCols.map((key) => (apt as any)[key]);
                rows.push(row);
              });
              const csvContent = rows.map((r) => r.join(',')).join('\n');
              const blob = new Blob([csvContent], { type: 'text/csv' });
              const a = document.createElement('a');
              a.href = URL.createObjectURL(blob);
              a.download = 'appointments.csv';
              a.click();
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition text-sm"
          >
            Download CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by patient, doctor or department"
          className="p-2 px-4 border border-gray-300 rounded-md shadow-sm w-full sm:w-80 text-sm"
          value={filterText}
          onChange={(e) => {
            setPage(1);
            setFilterText(e.target.value);
          }}
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => {
            setPage(1);
            setStatusFilter(e.target.value as any);
          }}
          className="p-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-blue-50 text-gray-700">
            <tr>
              {columnOptions.map(
                (col) =>
                  visibleCols.includes(col.key) && (
                    <th key={col.key} className="p-4 font-medium whitespace-nowrap">
                      {col.label}
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {paginated.map((apt, i) => (
              <tr key={apt.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {columnOptions.map(
                  (col) =>
                    visibleCols.includes(col.key) && (
                      <td key={col.key} className="p-4 whitespace-nowrap">
                        {col.key === 'status' ? (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              apt.status === 'Approved'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {apt.status}
                          </span>
                        ) : (
                          (apt as any)[col.key]
                        )}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700 gap-3">
        <span>
          Showing {paginated.length} of {filtered.length} appointments
        </span>
        <div className="space-x-3 flex items-center">
          {/* Previous Page */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-1.5 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <span className="font-medium text-gray-800">
            Page {page} of {totalPages}
          </span>

          {/* Next Page */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-1.5 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      {/* Customize Columns Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm mx-4 sm:mx-0">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Customize Table Columns</h2>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {columnOptions.map((col) => (
                <label key={col.key} className="flex items-center space-x-2 text-sm">
                  <input
                    type="checkbox"
                    checked={tempCols.includes(col.key)}
                    onChange={() => toggleTempColumn(col.key)}
                  />
                  <span>{col.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={applyCustomization}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
