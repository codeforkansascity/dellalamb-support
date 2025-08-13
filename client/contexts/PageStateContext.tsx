import React, { createContext, useContext, useRef, useCallback } from 'react';

interface PageScrollState {
  [pathname: string]: number;
}

interface PageFormState {
  [pathname: string]: {
    [key: string]: any;
  };
}

interface PageStateContextType {
  // Scroll position methods
  saveScrollPosition: (pathname: string, scrollTop: number) => void;
  getScrollPosition: (pathname: string) => number;
  
  // Form state methods
  saveFormState: (pathname: string, formKey: string, formData: any) => void;
  getFormState: (pathname: string, formKey: string) => any;
  clearFormState: (pathname: string, formKey: string) => void;
  
  // Modal state methods
  saveModalState: (pathname: string, modalKey: string, isOpen: boolean, data?: any) => void;
  getModalState: (pathname: string, modalKey: string) => { isOpen: boolean; data?: any };
  clearModalState: (pathname: string, modalKey: string) => void;
}

const PageStateContext = createContext<PageStateContextType | undefined>(undefined);

export function PageStateProvider({ children }: { children: React.ReactNode }) {
  const scrollStates = useRef<PageScrollState>({});
  const formStates = useRef<PageFormState>({});
  const modalStates = useRef<PageFormState>({});

  const saveScrollPosition = useCallback((pathname: string, scrollTop: number) => {
    scrollStates.current[pathname] = scrollTop;
  }, []);

  const getScrollPosition = useCallback((pathname: string) => {
    return scrollStates.current[pathname] || 0;
  }, []);

  const saveFormState = useCallback((pathname: string, formKey: string, formData: any) => {
    if (!formStates.current[pathname]) {
      formStates.current[pathname] = {};
    }
    formStates.current[pathname][formKey] = formData;
  }, []);

  const getFormState = useCallback((pathname: string, formKey: string) => {
    return formStates.current[pathname]?.[formKey] || null;
  }, []);

  const clearFormState = useCallback((pathname: string, formKey: string) => {
    if (formStates.current[pathname]) {
      delete formStates.current[pathname][formKey];
    }
  }, []);

  const saveModalState = useCallback((pathname: string, modalKey: string, isOpen: boolean, data?: any) => {
    if (!modalStates.current[pathname]) {
      modalStates.current[pathname] = {};
    }
    modalStates.current[pathname][modalKey] = { isOpen, data };
  }, []);

  const getModalState = useCallback((pathname: string, modalKey: string) => {
    return modalStates.current[pathname]?.[modalKey] || { isOpen: false };
  }, []);

  const clearModalState = useCallback((pathname: string, modalKey: string) => {
    if (modalStates.current[pathname]) {
      delete modalStates.current[pathname][modalKey];
    }
  }, []);

  const value: PageStateContextType = {
    saveScrollPosition,
    getScrollPosition,
    saveFormState,
    getFormState,
    clearFormState,
    saveModalState,
    getModalState,
    clearModalState,
  };

  return (
    <PageStateContext.Provider value={value}>
      {children}
    </PageStateContext.Provider>
  );
}

export function usePageState() {
  const context = useContext(PageStateContext);
  if (context === undefined) {
    throw new Error('usePageState must be used within a PageStateProvider');
  }
  return context;
}
