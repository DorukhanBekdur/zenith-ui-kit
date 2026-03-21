import React, { useState, useEffect } from "react";
import { Button } from "./components/Button/Button";
import { Stack } from "./components/Stack/Stack";
import { Typography } from "./components/Typography/Typography";
import { Input } from "./components/Input/Input";
import { Badge } from "./components/Badge/Badge";
import { Card } from "./components/Card/Card";
import { Modal } from "./components/Modal/Modal";
import { Snackbar } from "./components/Snackbar/Snackbar";
import { Box } from "./components/Box/Box";
import { Switch } from "./components/Switch/Switch";
import { Checkbox, Radio } from "./components/Selection/Selection";
import { Avatar, AvatarGroup } from "./components/Avatar/Avatar";
import { Skeleton } from "./components/Skeleton/Skeleton";
import { Tabs } from "./components/Tabs/Tabs";
import { Accordion } from "./components/Accordion/Accordion";
import { Tooltip } from "./components/Tooltip/Tooltip";
import { Progress } from "./components/Progress/Progress";
import { Drawer } from "./components/Drawer/Drawer";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { Pagination } from "./components/Pagination/Pagination";
import { Table } from "./components/Table/Table";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState("light");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", variant: "info" });
  const [btnLoading, setBtnLoading] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [selectedRadio, setSelectedRadio] = useState("option1");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  const showSnackbar = (message, variant = "info") => {
    setSnackbar({ open: true, message, variant });
  };

  const handleAsyncAction = () => {
    setBtnLoading(true);
    setTimeout(() => {
      setBtnLoading(false);
      showSnackbar("Action completed successfully!", "success");
    }, 2000);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <Stack direction="row" justify="between" align="center">
          <Box>
            <Typography variant="h1">⚛️ Zenith UI Kit</Typography>
            <Typography variant="body1" color="muted">Premium React Component Library</Typography>
          </Box>
          <Button 
            label={theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"} 
            variant="outline" 
            onClick={toggleTheme} 
          />
        </Stack>
      </header>

      <main className="app-main">
        {/* Advanced Components Section */}
        <section className="demo-section">
          <Typography variant="h2">Advanced Components</Typography>
          <Stack direction="row" spacing="md">
            <Button label="Open Modal" variant="primary" onClick={() => setIsModalOpen(true)} />
            <Button label="Success Toast" variant="outline" onClick={() => showSnackbar("All changes saved!", "success")} />
            <Button label="Error Toast" variant="outline" onClick={() => showSnackbar("Something went wrong.", "error")} />
          </Stack>
        </section>

        {/* Buttons Section */}
        <section className="demo-section">
          <Typography variant="h2">Enhanced Buttons</Typography>
          <Stack spacing="lg">
            <Stack direction="row" spacing="md" align="center" wrap="wrap">
              <Button 
                label="Simulate Loading" 
                variant="primary" 
                loading={btnLoading} 
                onClick={handleAsyncAction} 
              />
              <Button label="With Start Icon" variant="secondary" startIcon="⭐" />
              <Button label="With End Icon" variant="outline" endIcon="→" />
            </Stack>
          </Stack>
        </section>

        {/* Typography Section */}
        <section className="demo-section">
          <Typography variant="h2">Typography</Typography>
          <Box background="white" padding="lg" borderRadius="md" border="main" shadow="sm">
            <Stack spacing="md">
              <Typography variant="h1">Display Heading 1</Typography>
              <Typography variant="h3">Subheading 3</Typography>
              <Typography variant="body1">
                The library uses a modular typography system that adapts to light and 
                dark themes automatically through CSS variables.
              </Typography>
            </Stack>
          </Box>
        </section>

        {/* Selection Controls */}
        <section className="demo-section">
          <Typography variant="h2">Selection Controls</Typography>
          <Stack direction="row" spacing="xl" align="center" wrap="wrap">
            <Switch 
              label="Push Notifications" 
              checked={isSwitchOn} 
              onChange={() => setIsSwitchOn(!isSwitchOn)} 
            />
            <Checkbox 
              label="I agree to terms" 
              checked={isChecked} 
              onChange={() => setIsChecked(!isChecked)} 
            />
            <Stack direction="row" spacing="md">
              <Radio 
                label="Option A" 
                name="demo-radio" 
                value="option1" 
                checked={selectedRadio === "option1"} 
                onChange={() => setSelectedRadio("option1")} 
              />
              <Radio 
                label="Option B" 
                name="demo-radio" 
                value="option2" 
                checked={selectedRadio === "option2"} 
                onChange={() => setSelectedRadio("option2")} 
              />
            </Stack>
          </Stack>
        </section>

        {/* Display & Layout Pack */}
        <section className="demo-section">
          <Typography variant="h2">Data Display & Layout</Typography>
          <Stack spacing="xl">
            <Stack direction="row" spacing="lg" align="center">
              <Avatar name="Zenith Admin" size="lg" />
              <Avatar src="https://i.pravatar.cc/150?u=zenith" name="User" size="lg" />
              <AvatarGroup>
                <Avatar name="Alex" />
                <Avatar name="Beth" />
                <Avatar name="Charlie" />
                <Avatar name="David" />
                <Avatar name="Eve" />
              </AvatarGroup>
            </Stack>

            <Box background="white" padding="lg" borderRadius="md" border="main">
              <Stack spacing="md">
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" />
                <Skeleton variant="rect" height={100} />
              </Stack>
            </Box>
          </Stack>
        </section>

        {/* Content Navigation */}
        <section className="demo-section">
          <Typography variant="h2">Content Organization</Typography>
          <Stack spacing="lg">
            <Tabs 
              tabs={[
                { id: "tab1", label: "Overview", content: <Typography variant="body1">Project overview and core statistics go here.</Typography> },
                { id: "tab2", label: "Analytics", content: <Typography variant="body1">Detailed charts and data analysis views.</Typography> },
                { id: "tab3", label: "Settings", content: <Typography variant="body1">Configure your personal preferences.</Typography> },
              ]}
            />

            <Accordion 
              items={[
                { title: "What is Zenith UI?", content: "Zenith UI is a premium React component library built with performance and aesthetics in mind." },
                { title: "Is it theme-aware?", content: "Yes! Every component supports light and dark modes out of the box using CSS variables." },
                { title: "Can I customize the tokens?", content: "Absolutely. You can override the CSS variables in your root stylesheet to match your brand." },
              ]}
            />
          </Stack>
        </section>

        {/* Navigation & Overlays Pack */}
        <section className="demo-section">
          <Typography variant="h2">Navigation & Overlays</Typography>
          <Stack spacing="xl">
            <Breadcrumbs 
              items={[
                { label: "Home", href: "#" },
                { label: "Components", href: "#" },
                { label: "Navigation" },
              ]}
            />
            
            <Stack direction="row" spacing="md" align="center">
              <Button label="Open Side Drawer" variant="secondary" onClick={() => setIsDrawerOpen(true)} />
              <Tooltip title="This is a top tooltip" position="top">
                <Button label="Hover Me (Top)" variant="outline" />
              </Tooltip>
              <Tooltip title="This is a bottom tooltip" position="bottom">
                <Button label="Hover Me (Bottom)" variant="ghost" />
              </Tooltip>
            </Stack>

            <Pagination total={5} current={currentPage} onChange={setCurrentPage} />
          </Stack>
        </section>

        {/* Data & Progress Pack */}
        <section className="demo-section">
          <Typography variant="h2">Data & Progress</Typography>
          <Stack spacing="xl">
            <Stack spacing="md">
              <Typography variant="body2">System Load</Typography>
              <Progress value={65} size="lg" />
              <Stack direction="row" spacing="xl">
                <Progress value={45} variant="circular" size="lg" />
                <Progress value={85} variant="circular" size="lg" color="secondary" />
              </Stack>
            </Stack>

            <Table 
              columns={[
                { key: "name", title: "User Name" },
                { key: "role", title: "Role" },
                { key: "status", title: "Status", render: (val) => <Badge variant={val === "Active" ? "success" : "neutral"}>{val}</Badge> },
              ]}
              data={[
                { name: "Dorukhan Bekdur", role: "Lead Architect", status: "Active" },
                { name: "Jane Doe", role: "Designer", status: "Active" },
                { name: "John Smith", role: "Developer", status: "Inactive" },
              ]}
            />
          </Stack>
        </section>
      </main>

      <footer className="app-footer">
        <Typography variant="body2" align="center">Developed with ❤️ by Dorukhan Bekdur</Typography>
      </footer>

      {/* Overlays */}
      <Modal 
        open={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Welcome to Zenith UI"
        footer={
          <>
            <Button label="Cancel" variant="ghost" onClick={() => setIsModalOpen(false)} />
            <Button label="Understand" variant="primary" onClick={() => setIsModalOpen(false)} />
          </>
        }
      >
        <Typography variant="body1">
          This modal is rendered via React Portals, ensuring it stays on top of 
          the DOM tree and maintains proper accessibility standards.
        </Typography>
      </Modal>

      <Snackbar 
        open={snackbar.open} 
        message={snackbar.message} 
        variant={snackbar.variant} 
        onClose={() => setSnackbar({ ...snackbar, open: false })} 
      />

      <Drawer 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        title="Settings & Info"
      >
        <Stack spacing="lg">
          <Typography variant="h3">Account Settings</Typography>
          <Typography variant="body2">Manage your profile, billing, and notification preferences from this side panel.</Typography>
          <Button label="Save Changes" variant="primary" block onClick={() => setIsDrawerOpen(false)} />
        </Stack>
      </Drawer>
    </div>
  );
}

export default App;
