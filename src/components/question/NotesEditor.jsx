import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '../../context/ProgressContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { formatDate } from '../../utils/helpers.js';

function Editor({ label, icon, value, onSave, onDelete, hasContent }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || '');
  const { push } = useToast();

  const save = () => {
    onSave(draft);
    setEditing(false);
    push('Saved', 'success');
  };

  if (editing) {
    return (
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/45 dark:text-white/45">
          {icon} {label}
        </label>
        <textarea
          className="input min-h-[120px] resize-y py-3"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={`Write your ${label.toLowerCase()}… (plain text)`}
          autoFocus
        />
        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" className="btn-primary min-h-[40px] px-4 text-xs" onClick={save}>
            Save
          </button>
          <button
            type="button"
            className="btn-ghost min-h-[40px] px-4 text-xs"
            onClick={() => {
              setDraft(value || '');
              setEditing(false);
            }}
          >
            Cancel
          </button>
          {hasContent && (
            <button
              type="button"
              className="btn-ghost min-h-[40px] px-4 text-xs text-blush"
              onClick={() => {
                onDelete();
                setDraft('');
                setEditing(false);
                push('Deleted', 'info');
              }}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-dashed border-line bg-black/2 p-4 dark:border-night-line dark:bg-white/5">
      {hasContent ? (
        <>
          <div className="flex items-start justify-between gap-3">
            <p className="whitespace-pre-line text-sm leading-relaxed">{value}</p>
            <button
              type="button"
              className="btn-ghost min-h-[32px] shrink-0 px-2 text-xs"
              onClick={() => {
                setDraft(value || '');
                setEditing(true);
              }}
            >
              Edit
            </button>
          </div>
          {value?.updatedAt && (
            <p className="mt-2 text-[11px] text-ink/40 dark:text-white/40">
              Updated {formatDate(value.updatedAt)}
            </p>
          )}
        </>
      ) : (
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-ink/50 dark:text-white/50">
            {icon} No {label.toLowerCase()} yet — capture your thinking here.
          </p>
          <button
            type="button"
            className="btn-outline min-h-[36px] shrink-0 px-3 text-xs"
            onClick={() => {
              setDraft('');
              setEditing(true);
            }}
          >
            + Add
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Personal Notes (save/edit/delete) + a separate "My Approach" editor.
 * Both persist to localStorage via ProgressContext.
 */
export default function NotesEditor({ questionId }) {
  const { notes, saveNote, deleteNote } = useProgress();
  const entry = notes[questionId];
  const note = entry?.note || '';
  const approach = entry?.approach || '';

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Editor
        label="Personal Notes"
        icon="📝"
        value={note}
        hasContent={!!note}
        onSave={(text) => saveNote(questionId, { note: text, updatedAt: new Date().toISOString() })}
        onDelete={() => deleteNote(questionId)}
      />
      <Editor
        label="My Approach"
        icon="🧠"
        value={approach}
        hasContent={!!approach}
        onSave={(text) => saveNote(questionId, { approach: text, updatedAt: new Date().toISOString() })}
        onDelete={() => saveNote(questionId, { approach: '', updatedAt: new Date().toISOString() })}
      />
    </div>
  );
}
