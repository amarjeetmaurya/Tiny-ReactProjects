import { useModal } from "../contexts/ModalContext";

export default function DashboardLayout() {
  const { showModal, showConfirmModal } = useModal();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Success modal */}
      <button
        onClick={() =>
          showModal("Success", "Logged out successfully!", "success")
        }
        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
      >
        Show Success Modal
      </button>

      {/* Info modal */}
      <button
        onClick={() =>
          showModal("Info", "This is just some information.", "info")
        }
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Show Info Modal
      </button>

      {/* Error modal */}
      <button
        onClick={() =>
          showModal("Error", "Logout failed. Please try again.", "error")
        }
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      >
        Show Error Modal
      </button>

      {/* Warning modal */}
      <button
        onClick={() =>
          showModal("Warning", "This action may have consequences.", "warning")
        }
        className="px-4 py-2 rounded bg-yellow-500 text-black hover:bg-yellow-600"
      >
        Show Warning Modal
      </button>

      {/* Confirmation modal */}
      <button
        onClick={() =>
          showConfirmModal("Confirm Action", "Are you sure?", () =>
            alert("Confirmed!")
          )
        }
        className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
      >
        Show Confirm Modal
      </button>
    </div>
  );
}
